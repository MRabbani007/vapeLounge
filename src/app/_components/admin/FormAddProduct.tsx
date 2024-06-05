"use client";

import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type Props = {
  setAdd: Dispatch<SetStateAction<boolean>>;
};

export default function FormAddProduct({ setAdd }: Props) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  const [image, setImage] = useState("");

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [flavor, setFlavor] = useState("");

  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setName(brand + " " + model + " " + flavor);
    setTitle(brand + " " + model + " " + flavor);
  }, [brand, model, flavor]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const product = {
      id: crypto.randomUUID(),
      name,
      title,
      brand,
      model,
      flavor,
      image,
      price,
      quantity,
      visible,
    };

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // Handle response if necessary
    const data = await response.json();
  };

  const handleReset = () => {
    setAdd(false);
  };

  return (
    <section className="form_container">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <h2>Add Product</h2>
        <div>
          <div className="flex flex-row flex-wrap gap-4">
            <div className="field__group">
              <div className="field">
                <input
                  id="brand"
                  name="brand"
                  type="text"
                  title="Brand"
                  placeholder="Brand"
                  autoFocus
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="field__input"
                />
              </div>
              <div className="field">
                <input
                  id="model"
                  name="model"
                  type="text"
                  title="Model"
                  placeholder="Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="field__input"
                />
              </div>
              <div className="field">
                <input
                  id="flavor"
                  name="flavor"
                  type="text"
                  title="Flavor"
                  placeholder="Flavor"
                  value={flavor}
                  onChange={(e) => setFlavor(e.target.value)}
                  className="field__input"
                />
              </div>
            </div>
            <div className="field__group">
              <div className="field">
                <input
                  id="image"
                  name="image"
                  type="text"
                  title="Image"
                  placeholder="Image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="field__input"
                />
              </div>
              <div className="field">
                <input
                  id="price"
                  name="price"
                  type="text"
                  title="Price"
                  placeholder="Price"
                  autoFocus
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="field__input"
                />
              </div>
              <div className="field">
                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  title="Quantity"
                  placeholder="Quantity"
                  autoFocus
                  value={quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                  className="field__input"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="prod_visible"
                  type="checkbox"
                  checked={visible}
                  onChange={(e) => setVisible(e.target.checked)}
                />
                <label htmlFor="prod_visible">Visible</label>
              </div>
            </div>
          </div>
          <div className="form_buttons">
            <button type="submit" className="add">
              Add
            </button>
            <button type="reset" className="cancel">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
