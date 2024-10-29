function main() {
  logseq.App.registerCommandPalette(
    {
      key: 'rename-page',
      label: 'Rename page',
      keybinding: {
        mode: 'global',
        binding: 'mod+shift+t'
      },
    },
    async () => {
      const titleElement = parent.document.querySelector('h1.page-title');
      
      if (titleElement) {
        titleElement.click();
      }
    }
  );
}

logseq.ready(main).catch(console.error);
