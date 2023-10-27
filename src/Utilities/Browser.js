//Set the page title
export const SetTitle = ( title = '' ) => {
	document.title = title
}

//Set the favicon
export const SetFavicon = ( href = './favicon.ico', _href ) => {
	const link = document.querySelector( "link[rel*='icon']" ) || document.createElement( 'link' )
	link.type = 'image/x-icon'
	link.rel = 'shortcut icon'
	link.href = href

	document.getElementsByTagName( 'head' )[ 0 ].appendChild( link )
}

//Meta Tag handling
export const AddMetaTag = () => {}

export const RemoveMetaTag = () => {}


