# Gerador de Números Aleatórios
Este script adiciona uma funcionalidade de geração de números aleatórios a um botão na página HTML.

## Funcionamento
1. O evento de clique é adicionado ao botão com id "btn".
2. Quando o botão é clicado, os valores de min e max são buscados na página HTML.
3. Um número aleatório é gerado entre min e max usando Math.random().
4. Se o resultado for NaN (Not a Number), ele é definido como "Valor inválido".
5. Finalmente, o resultado é exibido em uma caixa-span na página HTML.

## Notas
- Certifique-se de que o valor de min e max são números antes de clicar no botão.
- Se o valor de min for maior que o valor de max, o resultado será "Valor inválido".
