const RenderElem = ( { tagName, attrs, children } ) => {
	const $el = document.createElement( tagName )

	// set attributes
	for ( const [ k, v ] of Object.entries( attrs ) ) {
		$el.setAttribute( k, v )
	}

	// set children
	for ( const child of children ) {
		const $child = Render( child )
		$el.appendChild( $child )
	}

	return $el
}

const Render = ( vNode ) => {
	if ( typeof vNode === 'string' ) {
		return document.createTextNode( vNode )
	}

	return RenderElem( vNode )
}

export default Render


