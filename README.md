# AzureCalculatorProject
This project is an advanced calculator web application built using Node.js and Express, deployed on Azure App Service. The calculator supports basic arithmetic operations as well as advanced mathematical functions. It also maintains a history of recent calculations, which are displayed dynamically on the web page without requiring a page reload.


# Features
* Basic Arithmetic Operations: Addition, Subtraction, Multiplication, Division.
* Advanced Mathematical Functions: Power, Sine, Cosine, Tangent, Logarithm.
* Calculation History: Displays the last 10 calculations performed.
* Dynamic Result Display: Results are shown on the same page without reloading.

# Technologies Used
* Backend: Node.js, Express
* Frontend: HTML, CSS, JavaScript
* Deployment: Azure App Service
* Version Control: Git, GitHub

# Deployment instructions

Log in to Azure:
bash
az login

Create a Resource Group:
az group create --name myResourceGroup --location eastus

Create an App Service Plan:
az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku FREE

Create a Web App:
az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name myUniqueAppName --runtime "NODE|14-lts"

Deploy the Application from GitHub:
az webapp deployment source config --name myUniqueAppName --resource-group myResourceGroup --repo-url <YOUR_GITHUB_REPOSITORY_URL> --branch main --manual-integration

Configure Application Settings:
az webapp config appsettings set --resource-group myResourceGroup --name myUniqueAppName --settings WEBSITES_PORT=3000

Browse to Your Web App:
az webapp browse --name myUniqueAppName --resource-group myResourceGroup
