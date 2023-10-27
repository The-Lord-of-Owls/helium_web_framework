import { CreateElement, Render, Mount, Diff } from './vDOM/index'

const createVApp = ( count ) => CreateElement( 'div', {
	attrs: {
		id: 'app',
		dataCount: count,
	},
	children: [
		CreateElement( 'input' ),
		String( count ),
		...Array.from( { length: count }, () => CreateElement( 'img', {
			attrs: {
				src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif'
			}
    	} ) )
	]
} )

let count = 0
let vApp = createVApp( count )
const $app = Render( vApp )

let $rootEl = Mount( $app, document.getElementById( 'app' ) )

setInterval( () => {
	const vNewApp = createVApp( Math.floor( Math.random() * 10 ) )
	const patch = Diff( vApp, vNewApp )
	$rootEl = patch( $rootEl )
	vApp = vNewApp
}, 1000 )


