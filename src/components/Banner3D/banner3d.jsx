import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model3D from "./model3d";
import { motion } from "framer-motion";
import useZustand from '../../zustand/useZustand'

export default function Banner3D() {
  const userName = useZustand((state) => state.userInfo?.name);
  
  return (
    <div className="">
      <section
        className="bg-[#f1f1f1] rounded-2xl relative flex h-150 overflow-hidden justify-center"
      >
        <div className="absolute z-1 h-full w-full backdrop-blur-md flex flex-col md:flex-row items-center group hover:duration-2000 hover:xl:backdrop-blur-none">
          <div className="infoTittle w-[100%] md:w-[50%] px-5 md:px-20 text-[50px] group-hover:xl:-translate-x-[50%] duration-1000">
            <p className="font-thin">Welcome,</p>
            <p className="text-red-400 font-bold">{userName}</p>
            <p>to Sb.studio</p>
          </div>
          <div className="model3D w-[100%] md:w-[50%] group-hover:xl:-translate-x-[50%] duration-700 h-full">
            <Canvas camera={{ position: [12, 0, 0], fov: 10 }}>
              <ambientLight intensity={3} />
              <directionalLight position={[5, 5, 5]} intensity={10} />
              <Model3D />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>

        <motion.div
          className="text-blackw-full top-30 absolute flex flex-col items-center gap-2 text-center"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <p className="font-[600] text-[50px]">我愿意爱你, 照顾你, 一生一世</p>
          <div className="flex gap-12 text-[100px]">
            <p>SB.STU</p>
            <p className="text-[#ff0303] font-[600]">SB.STU</p>
            <p>SB.STU</p>
          </div>
          <p className="text-stroke text-transparent text-[50px]">我愿意爱你, 照顾你, 一生一世</p>
        </motion.div>

      </section>
    </div>
  );
}
