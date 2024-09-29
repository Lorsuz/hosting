import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import features from '@json/mapChartFeatures.json';

export default function MapChart() {
	const countryColors: any = {
		BRA: '#00ff38',
		DEU: '#00ff38',
		UKR: '#00ff38',
		MYS: '#00ff38'
	};

	return (
		<ComposableMap
			projection='geoMercator'
			projectionConfig={{
				scale: 125,
				center: [0, 45]
			}}
			
		>
			<Geographies geography={features}>
				{({ geographies }) =>
					geographies.map(geo => (
						<Geography
							key={geo.rsmKey}
							style={{
								default: {
									fill: countryColors[geo.id] || '#0C1A11'
								},
								hover: {
									fill: countryColors[geo.id] || '#0d5600'
								},
								pressed: {
									fill: countryColors[geo.id] || '#169400'
								}
							}}
							geography={geo}
							fill={countryColors[geo.id] || '#0C1A11'}
							stroke='#00ff3747'
							strokeWidth={0.5}
							// stroke='#2f2f2f'
							/* onMouseEnter={(e: React.MouseEvent<SVGElement>) => {
								const target = e.target as SVGElement;
								target.setAttribute('fill', countryColors[geo.id] || '#0d5600');
							}}
							onMouseLeave={(e: React.MouseEvent<SVGElement>) => {
								const target = e.target as SVGElement;

								target.setAttribute('fill', countryColors[geo.id] || '#0C1A11');
							}} */
						/>
					))
				}
			</Geographies>
		</ComposableMap>
	);
}
