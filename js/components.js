var header = {
	template: `
	<header>
		<div class="navicon">
			<div>
				<svg class="full rotate" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
						<path d="M249.921,39.905c-5.573,0-10.091,4.519-10.091,10.091v0.037c0,5.574,4.518,10.073,10.091,10.073
							c5.573,0,10.092-4.537,10.092-10.111C260.012,44.423,255.493,39.905,249.921,39.905z"/>
						<path d="M223.463,52.848c-1.198-5.443-6.583-8.887-12.024-7.688c-53.172,11.697-95.173,50.993-109.608,102.555
							c-1.503,5.367,1.631,10.936,6.997,12.439c0.91,0.254,1.826,0.376,2.727,0.376c4.411,0,8.465-2.917,9.712-7.374
							c12.421-44.365,48.634-78.194,94.508-88.284C221.219,63.674,224.661,58.291,223.463,52.848z"/>
						<path d="M469.918,278.097c-15.646,0-31.484,10.816-31.484,31.488v42.778c0,2.999-1.18,5.829-3.332,7.98
							c-2.135,2.142-4.963,3.322-7.961,3.322c-6.232,0-11.302-5.07-11.302-11.302V212.64c0.738,0.043,1.474,0.07,2.209,0.07
							c10.753-0.001,21.019-4.601,28.717-13.014c9.73-10.632,13.894-25.879,10.867-39.789c-9.716-44.634-35.001-85.215-71.198-114.269
							C349.768,16.209,303.446,0,255.998,0c-47.448,0-93.771,16.209-130.437,45.639C89.365,74.693,64.08,115.274,54.365,159.908
							c-3.027,13.91,1.136,29.156,10.867,39.789c8.226,8.987,19.378,13.614,30.929,12.941v139.726c0,6.232-5.07,11.302-11.302,11.302
							c-2.998,0-5.825-1.18-7.971-3.333c-2.148-2.147-3.331-4.978-3.331-7.969v-42.778c0-20.672-15.837-31.488-31.479-31.488
							c-15.644,0-31.48,10.816-31.48,31.488v42.727c0,40.982,33.336,74.323,74.314,74.323c3.775,0,7.514-0.3,11.202-0.862v11.902
							c0,40.982,33.341,74.323,74.324,74.323c19.779,0,38.422-7.751,52.497-21.826c14.068-14.069,21.816-32.713,21.816-52.497V241.057
							c3.608,1.05,7.385,1.602,11.252,1.602c3.867,0,7.644-0.552,11.252-1.602v196.62c0,19.784,7.748,38.428,21.816,52.497
							C303.142,504.249,321.786,512,341.565,512c40.983,0,74.324-33.341,74.324-74.323v-11.903c3.687,0.563,7.425,0.862,11.202,0.862
							c40.977,0,74.314-33.341,74.314-74.323v-42.727C501.404,288.913,485.565,278.097,469.918,278.097z M80.12,186.071
							c-5.38-5.877-7.692-14.258-6.034-21.87c18.165-83.45,94.669-144.018,181.911-144.018c87.241,0,163.747,60.568,181.911,144.018
							c1.658,7.612-0.654,15.993-6.034,21.87c-2.557,2.794-8.058,7.326-16.076,6.313c-10.566-1.336-21.921-3.247-33.942-5.27
							c-10.652-1.792-22.163-3.728-34.672-5.521c-0.114-0.015-0.226-0.037-0.342-0.049c-25.634-3.664-55.476-6.722-90.846-6.722
							c-52.814,0-93.318,6.816-125.862,12.292c-12.021,2.022-23.376,3.933-33.942,5.27C88.165,193.397,82.676,188.863,80.12,186.071z
							 M330.313,239.963c6.011-2.329,11.324-6.064,15.531-10.806c2.059,2.32,4.382,4.397,6.923,6.19v116.967
							c0,8.901,1.578,17.529,4.643,25.737c-2.952,4.853-4.492,10.577-4.492,16.887v42.788c0,2.998-1.18,5.825-3.332,7.97
							c-2.148,2.148-4.979,3.332-7.97,3.332c-6.233,0-11.302-5.07-11.302-11.302V239.963z M315.892,222.476
							c-10.945,0-19.85-8.905-19.85-19.85v-6.275c14.248,0.968,27.387,2.387,39.711,4.02v2.254
							C335.753,213.571,326.843,222.476,315.892,222.476z M355.97,203.313c7.784,1.221,15.267,2.48,22.539,3.705
							c5.412,0.91,10.684,1.795,15.84,2.623c-2.844,7.489-10.077,12.835-18.555,12.835C365.077,222.476,356.337,213.939,355.97,203.313z
							 M154.589,378.052c3.066-8.214,4.644-16.84,4.644-25.738V235.345c2.539-1.792,4.861-3.868,6.918-6.188
							c4.206,4.741,9.515,8.477,15.525,10.806v197.764c0,6.232-5.07,11.302-11.301,11.302c-2.992,0-5.824-1.184-7.971-3.332
							c-2.141-2.141-3.321-4.972-3.321-7.97v-42.788C159.08,388.628,157.54,382.905,154.589,378.052z M136.201,222.479
							c-8.476,0-15.708-5.348-18.553-12.838c5.155-0.828,10.425-1.713,15.837-2.623c7.272-1.223,14.756-2.483,22.538-3.704
							C155.655,213.942,146.917,222.479,136.201,222.479z M176.242,202.621c0-0.762-0.092-1.502-0.252-2.216
							c12.397-1.648,25.619-3.08,39.966-4.055v6.275c0,0.003,0,0.007,0,0.01c-0.007,10.944-8.912,19.844-19.856,19.844
							C185.15,222.479,176.242,213.571,176.242,202.621z M84.907,406.454c-29.847,0-54.129-24.288-54.129-54.141v-42.727
							c0-10.761,9.41-11.305,11.297-11.305c1.886,0,11.296,0.545,11.296,11.305v42.778c0,8.385,3.283,16.284,9.233,22.233
							c5.95,5.966,13.854,9.253,22.253,9.253c17.361,0,31.485-14.124,31.485-31.485V237.369c5.857,3.36,12.635,5.293,19.858,5.293
							c0.959,0,1.906-0.046,2.848-0.113v109.764c0,8.023-1.731,15.743-5.15,22.957c-2.673,5.66-6.296,10.797-10.773,15.273
							c-5.714,5.724-12.73,10.161-20.308,12.84C97.09,405.422,91.065,406.454,84.907,406.454z M224.564,437.678
							c0,14.393-5.649,27.969-15.905,38.225c-10.262,10.263-23.838,15.915-38.226,15.915c-29.854,0-54.141-24.287-54.141-54.14V419.62
							c7.801-3.667,15.009-8.696,21.113-14.809c0.51-0.51,0.999-1.035,1.493-1.557v34.475c0,8.389,3.279,16.29,9.232,22.243
							c5.961,5.96,13.86,9.243,22.244,9.243c17.36,0,31.484-14.124,31.484-31.485V242.242c8.821-1.277,16.72-5.436,22.706-11.493
							V437.678z M275.859,202.627c0,5.247-2.026,10.193-5.704,13.927c-3.763,3.82-8.791,5.923-14.155,5.923
							c-5.365,0-10.393-2.104-14.155-5.923c-3.676-3.732-5.702-8.674-5.705-13.916c0-0.005,0-0.011,0-0.016
							c0-0.007-0.001-0.013-0.001-0.019v-7.267c6.399-0.212,13.007-0.33,19.859-0.33c6.853,0,13.461,0.118,19.861,0.33V202.627z
							 M395.705,437.677c0.002,29.853-24.286,54.14-54.14,54.14c-14.387,0-27.964-5.652-38.226-15.915
							c-10.256-10.256-15.905-23.831-15.905-38.226V230.749c5.984,6.055,13.878,10.213,22.695,11.489v195.489
							c0,17.361,14.124,31.485,31.485,31.485c8.383,0,16.283-3.283,22.233-9.233c5.966-5.95,9.253-13.854,9.253-22.253v-34.504
							c6.433,6.811,14.105,12.422,22.605,16.417V437.677z M427.081,406.453c-6.151,0-12.173-1.032-17.918-3.076
							c-13.573-4.799-24.895-15.043-31.069-28.119c-3.414-7.203-5.145-14.922-5.145-22.945V242.547c0.942,0.067,1.888,0.112,2.846,0.112
							c7.224,0,14.002-1.932,19.86-5.293v114.998c0,17.361,14.124,31.485,31.485,31.485c8.399,0,16.302-3.287,22.242-9.242
							c5.954-5.953,9.234-13.854,9.234-22.244v-42.778c0-10.761,9.414-11.305,11.301-11.305c1.888,0,11.302,0.545,11.302,11.305v42.727
							h0.001C481.221,382.166,456.938,406.453,427.081,406.453z"/>
				</svg>
			</div>
		</div>

		<div class="link">
			<a href="">home</a>
			<a href="">project</a>
			<a href="">about</a>
		</div>
	</header>`
}

var footer = {
	template:`
	<footer>
		<div>
			<div>
				<span>contact.</span>
			</div>
			<div class="socmed">
				<div>
					<a href="https://www.instagram.com/aditya.dwif/" target="__blank">my personal space</a>
					<a href="https://www.linkedin.com/in/aditya-dwi" target="__blank">my professional side</a>
				</div>

				<div>
					<a href="https://mail.google.com/mail/?view=cm&fs=1&to=aditya.febriyanto1@gmail.com" target="__blank">send me a letter</a>
				</div>
			</div>
		</div>
	</footer>`
}

var sidebarComponent = {
	template : `
	<div class="sidebar">
		<a href="#first">
			<svg class="full"  viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"></path></svg>
		</a>
	</div>`
}

var firstsectionhome = {
	template : `
	<div class="firsthome">
		<div class="greet">
			<div>
				HALLO
			</div>
			<div>
				hallo
			</div>
		</div>
		<div>good morning.</div>

		<div class="description">
			<span>hello there, im Aditya Dwi from Bandung city in Indonesia. I'm freshgraduate from SMKN 1 Cimahi and i'm interested in web development especially in Front-End Developer</span>
		</div>
	</div>
	`
}