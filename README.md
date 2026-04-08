# 🏥 DCM4CHEE + OHIF Viewer - 
Repositorio con entorno completo para **PACS DCM4CHEE** y **Visor OHIF**

---


### 1. Actualizar el sistema
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    git
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
git clone https://github.com/Guirrox/dcm4chee-ohif.git
cd dcm4chee-ohif
4. Acceder a los servicios
Servicio	URL	Usuario/Contraseña
OHIF Viewer	http://localhost:8080	Sin autenticación
DCM4CHEE Web	http://localhost:8081	usuario: admin / contraseña: admin
DCM4CHEE PACS	puerto DICOM: 11112	-
