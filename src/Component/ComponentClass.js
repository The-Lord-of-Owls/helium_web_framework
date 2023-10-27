import Store from '../StateManager/Store.js'

export class Component {
	constructor( { state, children, store } ) {
		if ( state ) this.state = state
		if ( children ) this.children = children

		if ( props.store instanceof Store ) {
			props.store.events.subscribe( 'stateChange', () => this.render() )
		}

		//Post initialisation of the component
		if ( this.componentPostInit ) this.componentPostInit()
	}


	//Render order functions
	render() {	//Render the component html to the vDOM
		//Runs before rendering the component, can manipulate state from this hook
		if ( this.componentPreRender ) this.componentPreRender()

		//We allow optional rendering, incase we do not want to render anything
		if ( this.componentRender ) this.componentRender()

		//Runs after rendering the component
		if ( this.componentPostRender ) this.componentPostRender()
	}


	//On removal of the component element
	remove() {
		if ( this.componentRemove ) this.componentRemove()

		delete this
	}


	//Updating the component
	update( oldState, newState ) {			//
		//componentShouldUpdate hook, do not alter oldState or newState in this hook(return true to allow update)
		//if componentShouldUpdate is not defined then the component will always update
		if ( this.componentShouldUpdate && !this.componentShouldUpdate( oldState, newState ) ) return

		//Perform the update on the component
		this.state = newState

		//componentPostUpdate hook, after this hook is ran, the oldState will nolonger exist!
		if ( this.componentPostUpdate ) this.componentPostUpdate( oldState, newState )
	}
}


