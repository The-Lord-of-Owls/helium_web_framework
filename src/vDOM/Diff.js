import Render from './Render'

const Zip = ( xs, ys ) => {
	const zipped = []
	for ( let i = 0; i < Math.max( xs.length, ys.length ); i++ ) {
		zipped.push( [ xs[ i ], ys[ i ] ] )
	}

	return zipped
}

const DiffAttrs = ( oldAttrs, newAttrs ) => {
	const patches = []

	// set new attributes
	for ( const [ k, v ] of Object.entries( newAttrs ) ) {
		patches.push( $node => {
			$node.setAttribute( k, v )

			return $node
		} )
	}

	// remove old attributes
	for ( const k in oldAttrs) {
		if ( !( k in newAttrs ) ) {
			patches.push( $node => {
				$node.removeAttribute( k )

				return $node
			} )
		}
	}

	return $node => {
		for ( const patch of patches ) {
			patch( $node )
		}
	}
}

const DiffChildren = ( oldVChildren, newVChildren ) => {
	const childPatches = []
	oldVChildren.forEach( ( oldVChild, i ) => {
		childPatches.push( Diff( oldVChild, newVChildren[ i ] ) )
	} )

	const additionalPatches = []
	for ( const additionalVChild of newVChildren.slice( oldVChildren.length ) ) {
		additionalPatches.push( $node => {
			$node.appendChild( Render( additionalVChild ) )

			return $node
		} )
	}

	return $parent => {
		for ( const [ patch, child ] of Zip( childPatches, $parent.childNodes ) ) {
			patch( child )
		}

		for ( const patch of additionalPatches ) {
			patch( $parent )
		}

		return $parent
	}
}

const Diff = ( vOldNode, vNewNode ) => {
	if ( vNewNode === undefined ) {
		return $node => {
			$node.remove()

			return undefined
		}
	}

	if ( typeof vOldNode === 'string' || typeof vNewNode === 'string' ) {
		if ( vOldNode !== vNewNode ) {
			return $node => {
				const $newNode = Render( vNewNode )
				$node.replaceWith( $newNode )

				return $newNode
			}
		} else {
			return $node => undefined
		}
	}

	if ( vOldNode.tagName !== vNewNode.tagName ) {
		return $node => {
			const $newNode = Render( vNewNode )
			$node.replaceWith( $newNode )

			return $newNode
		}
	}

	const patchAttrs = DiffAttrs( vOldNode.attrs, vNewNode.attrs )
	const patchChildren = DiffChildren( vOldNode.children, vNewNode.children )

	return $node => {
		patchAttrs( $node )
		patchChildren( $node )

		return $node
	}
}

export default Diff


