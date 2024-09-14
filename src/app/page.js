import { io } from "socket.io-client";

const socket = io("localhost:4000")

socket.on("hello", (arg) => {
  console.log(arg);
})

socket.emit("howdy", "stranger");

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
