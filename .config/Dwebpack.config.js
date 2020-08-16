module.exports = {
  /**
   * MODE
   */
  mode: "development",
  mode: "production",
  /**
   *  ENTRY
   */
  // Entrada Unica
  entry: "./src/master.js",
  // Entrada Multiple
  entry: ["url-1", "url-2", "url-3"],
  // Entrada Escalable (recomendada)
  // Se deben unir con Webpack-Merge
  entry: {
    app: "url",
    adminApp: "url",
  },
  /**
   * EJEMPLOS DE ENTRY
   *
   * ¿Qué hace esto? Le estamos diciendo a webpack que nos gustaría 2 puntos de entrada separados (como el ejemplo anterior).
   *
   * ¿Por qué? Con esto, puede importar las bibliotecas o archivos necesarios que no se modifican (por ejemplo, Bootstrap, jQuery, imágenes, etc.) en el interior vendor.jsy se agruparán en su propio bloque. El hash de contenido sigue siendo el mismo, lo que permite que el navegador los almacene en caché por separado, lo que reduce el tiempo de carga.
   */
  //webpack.config.js
  entry: {
    main: "./src/app.js",
    vendor: "./src/vendor.js",
  },
  //webpack.prop.js
  output: {
    filename: "[name].[contentHash].bundle.js",
  },
  //webpack.dev.js
  output: {
    filename: "[name].bundle.js",
  },
  /**
   * EJEMPLOS DE VARIAS PAGINAS
   *
   * ¿Qué hace esto? Le estamos diciendo a webpack que nos gustaría 3 gráficos de dependencia separados (como el ejemplo anterior).
   *
   * ¿Por qué? En una aplicación de varias páginas, el servidor buscará un nuevo documento HTML por usted. La página vuelve a cargar este nuevo documento y los activos se vuelven a descargar. Sin embargo, esto nos brinda la oportunidad única de hacer cosas como usar optimization.splitChunkspara crear paquetes de código de aplicación compartido entre cada página. Las aplicaciones de varias páginas que reutilizan una gran cantidad de código / módulos entre puntos de entrada pueden beneficiarse enormemente de estas técnicas, a medida que aumenta el número de puntos de entrada.
   *
   * Como regla general: use exactamente un punto de entrada para cada documento HTML.
   */
  //webpack.config.js
  entry: {
    pageOne: "./src/pageOne/index.js",
    pageTwo: "./src/pageTwo/index.js",
    pageThree: "./src/pageThree/index.js",
  },
  /**
   * OUTPUT
   *
   * Solo acepta un punto de salida
   */
  output: {
    filename: "bundle.js",
  },
  /**
   * MULTIPLES SALIDAS A MULTIPLES ENTRADAS
   *
   * Si su configuración crea más de un "fragmento" (como con varios puntos de entrada o cuando se usan complementos como CommonsChunkPlugin), debe usar sustituciones para asegurarse de que cada archivo tenga un nombre único.
   */
  /**
   * Este ejemplo genera las siguientes salidas
   * ./dist/app.js -  ./dist/search.js
   */
  entry: {
    app: "./src/app.js",
    search: "./src/search.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  /**
   * MODULES
   *
   * Por ejemplo, puede usar cargadores para decirle al paquete web que cargue un archivo CSS o que convierta TypeScript a JavaScript. Para hacer esto, comenzaría instalando los cargadores que necesita
   *
   * Uso de cargadores
   * Hay tres formas de utilizar cargadores en su aplicación:
   *
   * Configuración (recomendado): especifíquelos en su archivo webpack.config.js .
   * Inline : especifíquelos explícitamente en cada importdeclaración.
   * CLI : especifíquelos dentro de un comando de shell.
   */
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
  /**
   * EJEMPLO DE MODULES
   *
   * Se leen de abajo hacia arriba, es decir, Sass - Css - Style
   */
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: "style-loader" },
          // css-loader
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          // sass-loader
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};
