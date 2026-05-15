import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['src/global/**/*.json', 'src/semantic/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'en',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/esm',
        },
        {
          destination: 'tokens.cjs',
          format: 'javascript/module-flat',
        },
      ],
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
