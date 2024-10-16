import { Html } from '@react-three/drei'

function Loader() {
  return (
    <Html>
        <div className="flex justify-center items-center">
        <div className="w-20 h-20 boarder-2 boarder-opacity-20 boarder-blue-500
     boarder-t-blue-500 rounded-full animate-spin"></div>
        </div>
    </Html>
  )
}

export default Loader;