export default class PubSub {
	constructor() {
		this.events = {}
	}

	subscribe( event, callback ) {
		// If there's not already an event with this name set in our collection
		// go ahead and create a new one and set it with an empty array, so we don't
		// have to type check it later down-the-line
		if ( !this.events.hasOwnProperty( event ) ) {
			this.events[ event ] = []
		}

		// We know we've got an array for this event, so push our callback in there with no fuss
		return this.events[ event ].push( callback )
	}

	publish( event, data = {} ) {
		// There's no event to publish to, so bail out
		if ( !this.events.hasOwnProperty( event ) ) {
			return []
		}

		// Get each subscription and call its callback with the passed data
		return this.events[ event ].map( callback => callback( data ) )
	}
}


