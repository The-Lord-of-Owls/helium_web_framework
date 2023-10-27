import axios from 'axios'

export class HTTPController {
	//Create the controller
	constructor( { uri = 'http://localhost', postRoutes = {}, getRoutes = {} } ) {
		this.uri = uri					//uri used internally by the controller to make requests to
		this.postRoutes = postRoutes	//Predefined routes
		this.getRoutes = getRoutes		//predefined routes
	}

	//Add a route to the controller
	addRoute( name, route = '/', method = 'post' ) {
		switch ( method ) {
			case 'post':
				this.postRoutes[ name ] = ( data, cback ) => {
					axios.post( `${ this.uri }${ route }`, data ).then( res => {
						if ( cback && res.data ) cback( res.data )
					} )
				}

				break
			case 'get':
				this.getRoutes[ name ] = ( cback ) => {
					axios.get( `${ this.uri }${ route }` ).then( res => {
						if ( cback && res.data ) cback( res.data )
					} )
				}

				break
		} 
	}

	//remove a rotue from the controller
	removeRoute( name, method ) {
		if ( method ){
			//Remove specific route method
			if ( method === 'get' && this.getRoutes[ name ] ) delete this.getRoutes[ name ]
			if ( method === 'post' && this.postRoutes[ name ] ) delete this.postRoutes[ name ]
		} else {
			//Remove all route methods
			if ( this.getRoutes[ name ] ) delete this.getRoutes[ name ]
			if ( this.postRoutes[ name ] ) delete this.postRoutes[ name ]
		}
	}


	//Call a route and perform an action with requested data
	callRoute( { name, data, cback } ) {
		if ( this.routes[ name ] ) {
			if ( data ) {
				this.postRoutes[ name ]( data, cback )
			} else {
				this.getRoutes[ name ]( cback )
			}
		}
	}
}

//Simple constructor function to make http controllers for a given api
export default ( uri, postRoutes, getRoutes ) => {
	return new HTTPController( uri, postRoutes, getRoutes )
}


