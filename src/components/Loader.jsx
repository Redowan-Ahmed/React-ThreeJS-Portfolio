import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <svg className='w-20 h-20 border-4 border-opacity-80 border-blue-600 border-t-blue-300 rounded-full animate-spin absolute' viewBox="0 0 24 24"></svg>
      </div>
    </Html>
  );
};

export default Loader;
