import GoogleMapReact from 'google-map-react';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }

// import React from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// function Map(props) {
//   return (
//     <GoogleMap
//       defaultZoom={props.zoom}
//       defaultCenter={{ lat: props.lat, lng: props.lng }}
//     >
//       <Marker position={{ lat: props.lat, lng: props.lng }} />
//     </GoogleMap>
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// function MapContainer() {
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <WrappedMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDnm2WQDcs6Zn1Ot8GWeY7jImbGRGIxeOs`}
//         loadingElement={<div style={{ height: '100%' }} />}
//         containerElement={<div style={{ height: '100%' }} />}
//         mapElement={<div style={{ height: '100%' }} />}
//         lat={37.7749}
//         lng={-122.4194}
//         zoom={13}
//       />
//     </div>
//   );
// }

// export default MapContainer;
// import React from 'react';
// import { GoogleMap, LoadScript, Rectangle } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };
  
// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// const onLoad = rectangle => {
//   console.log('rectangle: ', rectangle)
// }

// function Map() {
//   return (
//     <LoadScript
//       googleMapsApiKey="
//       AIzaSyDnm2WQDcs6Zn1Ot8GWeY7jImbGRGIxeOs
//       "
//     > 
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       >
//         <Rectangle
//           onLoad={onLoad}
//           bounds={{
//             north: -3.712,
//             south: -3.875,
//             east: -38.431,
//             west: -38.654,
//           }}
//         />
//       </GoogleMap>
//     </LoadScript>
//   )
// }

// export default Map;
