import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-wrap justify-between p-6 bg-gradient-to-br from-zinc-400 to-zinc-200">
      <div className="flex flex-wrap gap-2">
        <Image src={"/delivery.jpg"} width={150} height={100} alt="Delivery" />
        <div>
          <h3 className="text-xl font-semibold">Delivery Options</h3>
          <p>We Deliver in city and ship by mail to other locations</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Image src={"/payment.png"} width={150} height={100} alt="Payment" />
        <div>
          <h3 className="text-xl font-semibold">Payment Methods</h3>
          <p>Pay on site, by transfer or cash on delivery</p>
        </div>
      </div>
    </div>
  );
}
