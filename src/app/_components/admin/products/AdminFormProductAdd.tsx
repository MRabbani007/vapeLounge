"use client";

import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styles from "./products.module.css";
import Image from "next/image";

// type Props = {
//   setAdd: Dispatch<SetStateAction<boolean>>;
// };

export default function AdminFormProductAdd() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState("");

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [flavor, setFlavor] = useState("");

  const [onSale, setOnSale] = useState(false);
  const [price, setPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setName(brand + " " + model + " " + flavor);
    setTitle(brand + " " + model + " " + flavor);
  }, [brand, model, flavor]);

  useEffect(() => {
    if (salePrice === 0) {
      setOnSale(false);
    } else {
      setOnSale(true);
    }
  }, [salePrice]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);

    const product = {
      id: crypto.randomUUID(),
      name,
      title,
      brand,
      model,
      flavor,
      imageURL,
      image,
      onSale,
      price,
      salePrice,
      qtyAvailable: quantity,
      visible,
    };

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product }),
    });

    // Handle response if necessary
    if (response?.status === 200) {
      alert("Product Saved");
    } else if (response?.status === 500) {
      alert("Server Error");
    }
  };

  const handleReset = () => {};

  const temp = imageURL + image;

  return (
    <section className="flex flex-wrap gap-4 w-full">
      <div className="">
        <p className="text-wrap max-w-[300px]">{name}</p>
        <div className="w-200 h-400">
          <Image
            src={Array.from(temp)[0] === "/" ? temp : "/products/noproduct.jpg"}
            alt="image_preview"
            width={200}
            height={400}
          />
        </div>
      </div>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div className={styles.field}>
          <label htmlFor="brand" className={styles.field_label}>
            Brand
          </label>
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
        <div className={styles.field}>
          <label htmlFor="model" className={styles.field_label}>
            Model
          </label>
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
        <div className={styles.field}>
          <label htmlFor="flavor" className={styles.field_label}>
            Flavor
          </label>
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
        <div className={styles.field}>
          <label htmlFor="image_URL" className={styles.field_label}>
            Image URL
          </label>
          <input
            id="image_URL"
            name="image_URL"
            type="text"
            title="Image_URL"
            placeholder="Image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="field__input"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="image" className={styles.field_label}>
            Image
          </label>
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
        <div className={styles.field}>
          <label htmlFor="price" className={styles.field_label}>
            Price
          </label>
          <input
            id="price"
            name="price"
            type="text"
            title="Price"
            placeholder="Price"
            autoFocus
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            className="field__input"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="sale_price" className={styles.field_label}>
            Sale Price
          </label>
          <input
            id="sale_price"
            name="sale_price"
            type="text"
            title="Sale Price"
            placeholder="Sale Price"
            autoFocus
            value={salePrice}
            onChange={(e) => setSalePrice(+e.target.value)}
            className="field__input"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="quantity" className={styles.field_label}>
            Stock Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            title="Stock Quantity"
            placeholder="Stock Quantity"
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
        <div className={styles.form_buttons}>
          <button type="submit" className={styles.save}>
            Add Product
          </button>
          <button type="reset" className={styles.cancel}>
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}
