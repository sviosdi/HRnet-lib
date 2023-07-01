/* Si la modale du formulaire de création d'une entrée comporte un fieldset
   il faut dans ce cas modifier les headers du modèle "en les mettant à plat"
   c'est à dire incorporer les headers (inputs) du contenu du fieldset de manière   
   contigue aux autres headers.  */
const getFlatHeaders = (hds) => {
    const flathd = []
    hds.forEach((hd) => {
        if (hd.input !== 'fieldset') flathd.push(hd)
        else {
            flathd.push(...getFlatHeaders(hd.content))
        }
    })
    return flathd
}

const getModel = (model) => {
    console.log('getModel() called')
    let _model = {
        ...model,
        flatHeaders: getFlatHeaders(model.headers),
    }
    return _model
}

export default getModel
