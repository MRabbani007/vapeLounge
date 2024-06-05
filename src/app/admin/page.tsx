"use client";

import React, { useState } from "react";
import FormAddProduct from "../_components/admin/FormAddProduct";

export default function AdminPage() {
  const [add, setAdd] = useState(false);

  return (
    <>
      <main>
        <h1>Admin</h1>
        <div>
          <button onClick={() => setAdd(true)}>Add Product</button>
        </div>
      </main>
      {add === true ? <FormAddProduct setAdd={setAdd} /> : null}
    </>
  );
}
