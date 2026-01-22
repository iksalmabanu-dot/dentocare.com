export default defineConfig({
  root: “client”,
  base: “/dentocare/“,
  plugins: [react()],
  build: {
    outDir: “../dist”,
    emptyOutDir: true,
  },
});
