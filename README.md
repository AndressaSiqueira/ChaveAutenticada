# ObjS-Chave
Sript de Validação > encontra-se na pasta "ValidaSub"


precisamos que nossas chaves e arquivo de configuração ~/.oci/ , para isso efetue os seguintes comandos:
kubectl create configmap oci-config --from-file=<arquivo de configuracao>
kubectl create configmap oci-apikey --from-file=<arquivo de chave>
