module.exports = {
  //...
  daisyui: {

    
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":*", 

    themes: [
      
      {my: {
      "primary": "#ffffff",
      // "primary": "#a991f7",
      "secondary": "#f6d860",
      "accent": "#37cdbe",
      "neutral": "#3d4451",
      "base-100": "#ffffff"},
        
    },


      // {light: {
      // ...require("daisyui/src/theming/themes")["light"],
      // primary: "blue",
      // secondary: "teal"}},

      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
}
