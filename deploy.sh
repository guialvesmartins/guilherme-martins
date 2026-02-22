#!/bin/bash

# Script de Deploy - Guilherme Martins Portfolio
# Build local + deploy no Docker Swarm

set -e

echo "Deploy guilhermemartins.dev.br..."

# 1. Atualizar código
echo "Atualizando código..."
cd /root/guilherme-martins
git fetch origin main
git reset --hard origin/main

# 2. Build da imagem (sem cache para garantir código atualizado)
echo "Construindo imagem..."
docker build --no-cache -t guilherme-martins/portfolio:latest .

# 3. Verificar se a stack existe e fazer deploy
STACK_EXISTS=$(docker stack ls --format '{{.Name}}' | grep -c "guilherme-martins" || true)

if [ "$STACK_EXISTS" -gt 0 ]; then
    echo "Forçando atualização do serviço..."
    docker service update --force --image guilherme-martins/portfolio:latest guilherme-martins_portfolio
else
    echo "Criando nova stack..."
    docker stack deploy -c docker-stack.yml guilherme-martins
fi

# 4. Aguardar serviço ficar pronto
echo "Aguardando serviço iniciar..."
sleep 10

# 5. Verificar status
echo "Status do serviço:"
docker service ps guilherme-martins_portfolio --no-trunc

echo ""
echo "Deploy concluído! Aplicação disponível na porta 3002."
echo "Verificar logs: docker service logs -f guilherme-martins_portfolio"
