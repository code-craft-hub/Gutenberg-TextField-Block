wp.blocks.registerBlockType('sg-block/simple-block', {
    title: wp.i18n.__('Simple Block'),
    description: wp.i18n.__('This is the description of the block'),
    icon: 'universal-access-alt',
    category: 'common',

    edit: function () {
        return wp.element.createElement('p',{className: 'custom-block'}, 'Hello World')
    },
    save: function () {
        return wp.element.createElement('p',{className: 'custom-block'}, 'This is saved into the database')
    },
})