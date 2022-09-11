# -------------------- IMPORT --------------------
from flask import Flask, Response, request, render_template
from flask_sqlalchemy import SQLAlchemy
import json

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:150803@localhost/cadastro'

db = SQLAlchemy(app)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50))
    cpf = db.Column(db.String(30))
    telefone = db.Column(db.String(20))
    email = db.Column(db.String(40))
    password = db.Column(db.String(40))
    conf_password = db.Column(db.String(40))
    
    def to_json(self):
            return {
            'id': self.id,
            'nome': self.nome,
            'cpf': self.cpf,
            'telefone': self.telefone,
            'email': self.email,
            'password': self.password,
            'conf_password': self.conf_password
        }
        
# -------------------- CREAT --------------------
@app.route("/users", methods=["POST"])
def create_users():
    body = request.get_json()

    try:
        users = Users(
            nome=body["nome"],
            cpf=body["cpf"],
            telefone=body["telefone"],
            email=body["email"],
            password=body["password"],
            conf_password=body["conf_password"]
        )

        db.session.add(users)
        db.session.commit()

        return gera_response(201, "usuario", users.to_json(), "Criado com Sucesso")
    except Exception as e:
        print('Erro', e)
        return gera_response(500, "usuario", {}, "Erro ao cadastrar")

# -------------------- READ --------------------
@app.route("/users", methods=['GET'])
def select_users():
    users_objects = Users.query.all()
    users_json = [users.to_json() for users in users_objects]

    return gera_response(200, "usuarios", users_json, "OK")


@app.route("/users/<id>", methods=["GET"])
def select_users1(id):
    users_objects = Users.query.filter_by(id=id).first()
    users_json = users_objects.to_json()

    return gera_response(200, "usuario", users_json)

# -------------------- UPDATE --------------------
@app.route("/users/<id>", methods=["PUT"])
def update_user(id):
    users_objects = Users.query.filter_by(id=id).first()
    body = request.get_json()

    try:
        if ('nome' in body):
            users_objects.nome = body["nome"]
        if ('cpf' in body):
            users_objects.cpf = body["cpf"]
        if ('telefone' in body):
            users_objects.telefone = body["telefone"]
        if ('email' in body):
            users_objects.email = body["email"]
        if ('password' in body):
            users_objects.password = body["password"]
        if ('conf_password' in body):
            users_objects.conf_password = body["conf_password"]

        db.session.add(users_objects)
        db.session.commit()
        return gera_response(200, "usuario", users_objects.to_json(), "Atualizado com Sucesso")
    except Exception as e:
        print('Erro', e)
        return gera_response(400, "usuario", {}, "Erro ao Atualizar")

# -------------------- DELETE --------------------
@app.route("/users/<id>", methods=["DELETE"])
def delete_user(id):
    users_objects = Users.query.filter_by(id=id).first()

    try:
        db.session.delete(users_objects)
        db.session.commit()
        return gera_response(200, "usuario", users_objects.to_json(), "Deletado com Sucesso")
    except Exception as e:
        print('Erro', e)
        return gera_response(400, "usuario", {}, "Erro ao Deletar")

# -------------------- RESPONSE --------------------
def gera_response(status, content_name, content, message=False):
    body = {}
    body[content_name] = content

    if (message):
        body["mensagem"] = message
    return Response(json.dumps(body), status=status, mimetype="application/json")


@app.route("/home")
@app.route("/")
def home():
    return render_template("index.html")


@app.route("/cursos")
def cursos():
    return render_template("cursos.html")


@app.route("/login")
def login():
    return render_template("login.html")


if __name__ == "__main__":
    app.run(debug=True)
