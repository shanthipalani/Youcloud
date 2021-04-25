// // react
// import { 
//     useEffect,
//     useMemo, 
//     useState,
// } from 'react'; 

// export function useMedia(query ) {
//     if (!process.browser) {
//         return false;
//     }

//     const media = useMemo(() => window.matchMedia(query), [query]);
//     const [state, setState] = useState(media.matches);

//     useEffect(() => {
//         const onChangeMedia = () => {
//             setState(media.matches);
//         };

//         if (media.addEventListener) {
//             media.addEventListener('change', onChangeMedia);
//         } else {
//             // noinspection JSDeprecatedSymbols
//             media.addListener(onChangeMedia);
//         }

//         return () => {
//             if (media.removeEventListener) {
//                 media.removeEventListener('change', onChangeMedia);
//             } else {
//                 // noinspection JSDeprecatedSymbols
//                 media.removeListener(onChangeMedia);
//             }
//         };
//     }, [media]);

//     return state;
// }
 