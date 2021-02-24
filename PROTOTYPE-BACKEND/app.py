from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
import psycopg2

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:19992003i@localhost/prueba'
db = SQLAlchemy(app)

class Taches(db.Model):
    #Tout les données qui ont un lien avec la tache en question
    __tablename__ = "taches"
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200))



#Premier route initiale (ma racine)
@app.route('/')
def home():
    '''Affiche toutes les tâches se trouvant dans la DB'''
    tache = Taches.query.all() # consultation de toutes les tâches dans DB
    return render_template('taches.html', taches = tache) #render_template = rederizar la plantilla

#Premier route initiale (ma racine)
@app.route('/creation-taches', methods=['POST'])
def creer_tache():
    nouvelle_tache = Taches(content=request.form['contenu']) # il est nécessaire de passer le contenu et
                                                                            # le done : si taches fini ou pas
    db.session.add(nouvelle_tache) #Rajoute de nouvelle tache dans la DB
    db.session.commit()
    return redirect(url_for('home')) #Update / redirectioner

@app.route('/efface-tache/<id>')
def efface(id):
    #el id es el id que me van a pasar a travers l'url o la peticion
    Taches.query.filter_by(id=int(id)).delete() # je cherche la tache et directement je l'élimine
    db.session.commit()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
