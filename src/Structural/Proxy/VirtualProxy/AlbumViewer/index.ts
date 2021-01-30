import { ImageProxy } from "./Images";

function main(): void {
  const a = new ImageProxy(5, 6);
  const b = new ImageProxy(3, 3);

  console.log(a.image);
  console.log();
  console.log(b.image);
}

main();
