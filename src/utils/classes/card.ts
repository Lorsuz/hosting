export class Card {
	imageUrl: any;
	onDismiss: any;
	element: any;

	// private properties
	startPoint: any;
	offsetX: any;
	offsetY: any;

	constructor ( { imageUrl, onDismiss }: { imageUrl: any; onDismiss: any; } ) {
		this.imageUrl = imageUrl;
		this.onDismiss = onDismiss;
		this.init();
	}

	isTouchDevice = () => {
		// @ts-expect-error
		return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
	};

	init = () => {
		const card = document.createElement( 'div' );
		card.classList.add( 'card' );
		card.innerHTML = `
			<h3>Lorem ipsum dolor</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			<ul>
				<li>Advantage</li>
				<li>Advantage</li>
				<li>Advantage</li>
			</ul>
		`;
		this.element = card;
		if ( this.isTouchDevice() ) {
			this.listenToTouchEvents();
		} else {
			this.listenToMouseEvents();
		}
	};

	listenToTouchEvents = () => {
		this.element.addEventListener( 'touchstart', ( e: TouchEvent ) => {
			const touch = e.changedTouches[ 0 ];
			if ( !touch ) return;
			const { clientX, clientY } = touch;
			this.startPoint = { x: clientX, y: clientY };
			// @ts-expect-error
			document.addEventListener( 'touchmove', this.handleTouchMove );
			this.element.style.transition = 'transform 0s';
		} );

		document.addEventListener( 'touchend', this.handleTouchEnd );
		document.addEventListener( 'cancel', this.handleTouchEnd );
	};

	listenToMouseEvents = () => {
		this.element.addEventListener( 'mousedown', ( e: { clientX: any; clientY: any; } ) => {
			const { clientX, clientY } = e;
			this.startPoint = { x: clientX, y: clientY };
			document.addEventListener( 'mousemove', this.handleMouseMove );
			this.element.style.transition = 'transform 0s';
		} );

		document.addEventListener( 'mouseup', this.handleMoveUp );

		// prevent card from being dragged
		this.element.addEventListener( 'dragstart', ( e: { preventDefault: () => void; } ) => {
			e.preventDefault();
		} );
	};

	handleMove = ( x: number, y: number ) => {
		this.offsetX = x - this.startPoint.x;
		this.offsetY = y - this.startPoint.y;
		const rotate = this.offsetX * 0.1;
		this.element.style.transform = `translate(${ this.offsetX }px, ${ this.offsetY }px) rotate(${ rotate }deg)`;
		// dismiss card
		if ( Math.abs( this.offsetX ) > this.element.clientWidth * 0.7 ) {
			this.dismiss( this.offsetX > 0 ? 1 : -1 );
		}
	};

	// mouse event handlers
	handleMouseMove = ( e: { preventDefault?: any; clientX?: any; clientY?: any; } ) => {
		e.preventDefault();
		if ( !this.startPoint ) return;
		const { clientX, clientY } = e;
		this.handleMove( clientX, clientY );
	};

	handleMoveUp = () => {
		this.startPoint = null;
		document.removeEventListener( 'mousemove', this.handleMouseMove );
		this.element.style.transform = '';
	};

	// touch event handlers
	handleTouchMove = ( e: { changedTouches: any[]; } ) => {
		if ( !this.startPoint ) return;
		const touch = e.changedTouches[ 0 ];
		if ( !touch ) return;
		const { clientX, clientY } = touch;
		this.handleMove( clientX, clientY );
	};

	handleTouchEnd = () => {
		this.startPoint = null;
		// @ts-expect-error
		document.removeEventListener( 'touchmove', this.handleTouchMove );
		this.element.style.transform = '';
	};

	dismiss = ( direction: number ) => {
		this.startPoint = null;
		document.removeEventListener( 'mouseup', this.handleMoveUp );
		document.removeEventListener( 'mousemove', this.handleMouseMove );
		document.removeEventListener( 'touchend', this.handleTouchEnd );
		// @ts-expect-error
		document.removeEventListener( 'touchmove', this.handleTouchMove );
		this.element.style.transition = 'transform 1s';
		this.element.style.transform = `translate(${ direction * window.innerWidth }px, ${ this.offsetY }px) rotate(${ 90 * direction }deg)`;
		this.element.classList.add( 'dismissing' );
		setTimeout( () => {
			this.element.remove();
		}, 1000 );
		if ( typeof this.onDismiss === 'function' ) {
			this.onDismiss();
		}
	};
}
