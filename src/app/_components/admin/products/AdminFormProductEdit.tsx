"use client";

import React, { FormEvent, useEffect, useState } from "react";
import styles from "./products.module.css";
import { useRouter } from "next/navigation";

export default function AdminFormProductEdit({
  product,
}: {
  product: Product;
}) {
  const router = useRouter();
  const [title, setTitle] = useState(product?.title || "");
  const [name, setName] = useState(product?.name || "");

  const [image, setImage] = useState(product?.image || "");
  const [imageURL, setImageURL] = useState(product?.imageURL || "");

  const [brand, setBrand] = useState(product?.brand || "");
  const [model, setModel] = useState(product?.model || "");
  const [flavor, setFlavor] = useState(product?.flavor || "");

  const [price, setPrice] = useState(product?.price || 0);
  const [salePrice, setSalePrice] = useState(product?.salePrice || 0);
  const [onSale, setOnSale] = useState(product?.onSale || false);

  const [quantity, setQuantity] = useState(product?.qtyAvailable || 0);

  const [visible, setVisible] = useState(Boolean(product?.visible));

  useEffect(() => {
    setName(brand + " " + model + " " + flavor);
    setTitle(brand + " " + model + " " + flavor);
  }, [brand, model, flavor]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);

    const newProduct = {
      ...product,
      name,
      title,
      brand,
      model,
      flavor,
      image,
      imageURL,
      price,
      salePrice,
      onSale,
      qtyAvailable: quantity,
      visible,
    };

    await fetch("/api/products", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: newProduct }),
    })
      .then((response) => {
        if (response?.status === 200) {
          alert("Product Saved");
          router.back();
        } else if (response?.status === 500) {
          alert("Server Error");
        }
      })
      .catch(() => {});
  };

  const handleCreate = async () => {
    const newProduct: Product = {
      ...product,
      id: crypto.randomUUID(),
      name,
      title,
      brand,
      model,
      flavor,
      image,
      imageURL,
      price,
      salePrice,
      onSale,
      qtyAvailable: quantity,
      visible,
    };

    delete newProduct["_id"];

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: newProduct }),
    });

    if (response?.status === 200) {
      alert("Product Created");
    } else if (response?.status === 500) {
      alert("Server Error");
    }
  };

  const handleReset = () => {
    setTitle(product?.title);
    setName(product?.name);
    setImage(product?.image);
    setBrand(product?.brand);
    setModel(product?.model);
    setFlavor(product?.flavor);
    setPrice(product?.price);
    setQuantity(product?.qtyAvailable);
    setVisible(product?.visible || true);
  };

  const handleDelete = async () => {
    const response = await fetch("/api/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: product.id }),
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
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
          Update
        </button>
        <button type="button" className={styles.add} onClick={handleCreate}>
          Create New
        </button>
        <button type="reset" className={styles.cancel}>
          Reset
        </button>
        <button type="button" className={styles.delete} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </form>
  );
}
