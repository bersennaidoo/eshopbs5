import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['static/react/main.tsx'],
  bundle: true,
  sourcemap: true,
  format: 'esm',
  loader: { '.png': 'file', '.jpg': 'file' },
  publicPath: 'http://localhost:1313/react',
  outdir: 'static/react',
  define: {
      'process.env.VITE_CLERK_PUBLISHABLE_KEY': '"pk_test_cG9zc2libGUtbWFjYXctOS5jbGVyay5hY2NvdW50cy5kZXYk"',
  },
})

await ctx.watch()
