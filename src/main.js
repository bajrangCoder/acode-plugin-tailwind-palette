import plugin from '../plugin.json';
import style from './style.scss';
import tag from 'html-tag-js';

class TailwindColorPalette {

    async init($page) {
        let command = {
            name: "Tailwind Palette",
            description: "Tailwind Color Palette",
            exec: this.run.bind(this),
        }
        editorManager.editor.commands.addCommand(command);
        $page.id = 'acode-plugin-tailwind-color-palette';
        $page.settitle("Tailwind Color Palette");
        this.$page = $page;
        this.$style = tag('style', {
            textContent: style,
        });
        this.$outputDiv = tag('div',{
            className: 'outputDiv',
        });
        this.$colorSelector = tag('select',{
            className: 'colorSelector',
        });
        this.$insertBtn = tag('button',{
            textContent: 'Use this color',
        });
        this.$page.append(this.$outputDiv);
        this.$page.append(this.$colorSelector);
        this.$page.append(this.$insertBtn);
        this.load_colors();
        document.head.append(this.$style);
        this.$insertBtn.onclick = this.insert_color.bind(this);
        this.$colorSelector.onchange = this.change_color.bind(this);
    }
    
    async run(){
        this.$page.show()
    }
    
    load_colors(){
        fetch(this.baseUrl+'colors.json')
          .then(response => response.json())
          .then(data => {
            data.forEach(obj => {
                const colorsOption = tag('option',{
                    value: obj.colorCode,
                    textContent: obj.className,
                });
                this.$colorSelector.append(colorsOption);
            });
          });
    }
    
    change_color(){
        this.$outputDiv.style.background = this.$colorSelector.value;
    }
    
    insert_color(){
        editorManager.editor.insert(this.$colorSelector.value);
        this.$page.hide();
    }
    
    async destroy() {
        let command = {
            name: "Tailwind Palette",
            description: "Tailwind Color Palette",
            exec: this.run.bind(this),
        }
        editorManager.editor.commands.removeCommand(command);
    }
}

if (window.acode) {
    const acodePlugin = new TailwindColorPalette();
    acode.setPluginInit(plugin.id, (baseUrl, $page, {
        cacheFileUrl, cacheFile
    }) => {
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        acodePlugin.baseUrl = baseUrl;
        acodePlugin.init($page, cacheFile, cacheFileUrl);
    });
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}