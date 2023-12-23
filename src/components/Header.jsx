import React from "react";
import CartIcon from "./CartIcon.jsx";
import MyLogo from "./MyLogo.jsx";
import Navigation from "./Navigation.jsx";

const navigation = [
  { name: "Products", href: "/products" },
  { name: "Cart", href: "/cart" },
  { name: "Contact", href: "/contact" },
];

export default function Header({ quatities, children }) {
  return (
    <div className="bg-background-image bg-cover bg-no-repeat bg-fixed min-h-screen">
      <header className="fixed w-[100%] opacity-[0.97] hover:bg-gray-800 hover:opacity-100">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <MyLogo />
                <Navigation navigation={navigation} />
              </div>
              <CartIcon quatities={quatities} />
            </div>
          </div>
        </nav>
      </header>
      <div className="pt-16">{children}</div>
    </div>
  );
}
