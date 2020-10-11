import JSMpeg from '@cycjimmy/jsmpeg-player';
import React from 'react';
import { useDroneStream } from '../hook';

export default function Stream() {
  const droneStream = useDroneStream();

  return <div>Stream</div>;
}

// export default class JsmpegPlayer extends Component<any> {
//     public els: any;
//   constructor(props) {
//     super(props);

//     this.els = {
//       videoWrapper: null,
//     };
//   };

//   render() {
//     return (
//       <div
//         className={this.props.wrapperClassName}
//         ref={videoWrapper => this.els.videoWrapper = videoWrapper}>
//       </div>
//     );
//   };

//   componentDidMount() {
//     // Reference documentation, pay attention to the order of parameters.
//     // https://github.com/cycjimmy/jsmpeg-player#usage
//     new JSMpeg.VideoElement(
//       this.els.videoWrapper,
//       this.props.videoUrl,
//       this.props.options,
//       this.props.overlayOptions
//     );
//   };
//   };
// };
