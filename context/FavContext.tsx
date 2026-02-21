"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// تعريف شكل المنتج في المفضلة
interface Product {
  _id: string;
  title: string;
  price: string;
  imgSrc: string;
}

interface FavContextType {
  favorites: Product[];
  addToFav: (product: Product) => void;
  removeFromFav: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavContext = createContext<FavContextType | undefined>(undefined);

export const FavProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  // تحميل المفضلات من الـ LocalStorage عند فتح الموقع
  useEffect(() => {
    const savedFavs = localStorage.getItem("fitcheck_favs");
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
  }, []);

  // حفظ المفضلات في الـ LocalStorage عند كل تغيير
  useEffect(() => {
    localStorage.setItem("fitcheck_favs", JSON.stringify(favorites));
  }, [favorites]);

  const addToFav = (product: Product) => {
    setFavorites((prev) => [...prev, product]);
  };

  const removeFromFav = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item._id !== id));
  };

  const isFavorite = (id: string) => favorites.some((item) => item._id === id);

  return (
    <FavContext.Provider
      value={{ favorites, addToFav, removeFromFav, isFavorite }}
    >
      {children}
    </FavContext.Provider>
  );
};

export const useFav = () => {
  const context = useContext(FavContext);
  if (!context) throw new Error("useFav must be used within FavProvider");
  return context;
};
