const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
            nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
  }

// Etape 1:
  
  
  const afficherDossier = (dossier) => {
      console.log(dossier.nom)
  }
  
  afficherDossier(dossierPrincipal)
  

// Etape 2/3:

  const afficherDossierIteratif = (dossier) => {
    console.log(dossier.nom)
    for (const item of dossier.contenu) {
      console.log(item.nom);
      if (item.contenu) {
        for (const sousItem of item.contenu) {
          console.log(sousItem.nom);
          if (sousItem.contenu) {
                  for (const metaItem of sousItem.contenu) {
                      console.log(metaItem.nom);
                  }
              }
          }
      }
  }
};

afficherDossierIteratif(dossierPrincipal)


const afficherDossierRecursif = (dossier) => {
  console.log(dossier.nom)
  if (dossier.contenu === undefined) {
    return;
  }
  for (const item of dossier.contenu) {
    afficherDossierRecursif(item)
  }
};

afficherDossierRecursif(dossierPrincipal)