from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy

#flask es un framewok (c'est comme django)
app = Flask(__name__) #pour ejectuer le nom de mon fichier qui remplace le name

#app es mi aplicacion de servidor

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/tasks.db' #configuration d'ou se trouve ma base de données

db = SQLAlchemy(app) #reçoit en parametre l'application
#db permet de faire des requetes a ma base de données

class Task(db.Model):
    #Tout les données qui ont un lien avec la tache en question
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200))
    done = db.Column(db.Boolean)

#Premier route initiale (ma racine)
@app.route('/')
def home():
    '''Affiche toutes les tâches se trouvant dans la DB'''

    tache = Task.query.all() # consultation de toutes les tâches dans DB
    return render_template('taches.html', taches = tache) #render_template = rederizar la plantilla

#Route permettant de creer les taches
@app.route('/creation-taches', methods=['POST'])
def creer_tache():
    nouvelle_tache = Task(content=request.form['contenu'], done= False) # il est nécessaire de passer le contenu et
                                                                            # le done : si taches fini ou pas
    db.session.add(nouvelle_tache) #Rajoute de nouvelle tache dans la DB
    db.session.commit()
    return redirect(url_for('home')) #Update / redirectioner

@app.route('/tache-terminer/<id>')
def terminer(id):
    tache = Task.query.filter_by(id=int(id)).first() #Consultation de toutes les tâches + prendre 1ère tâche ayant l'id correspondant
    tache.done = not(tache.done)
    db.session.commit()
    return redirect(url_for('home')) #redirectioner à la direction /creation-taches

@app.route('/efface-tache/<id>')
def efface(id):
    #el id es el id que me van a pasar a travers l'url o la peticion
    Task.query.filter_by(id=int(id)).delete() # je cherche la tache et directement je l'élimine
    db.session.commit()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True) # pourque chaque fois qu'on reinitialise le serveur ou on change, alors le serveur il se relance seul




#Les commentaires dans la console affichent ou est-ce qu'il est entrain d'exectuer mon application (dans quelle localhost)