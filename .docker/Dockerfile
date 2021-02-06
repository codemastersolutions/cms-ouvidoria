FROM node:14.15.4-alpine3.12

RUN apk update && \
    apk add --no-cache yarn git nano && \
    git config --global credential.helper 'cache --timeout=7200' && \
    git config --global user.email "gilson@codemastersolucoes.com" && \
    git config --global user.name "Gilson Gabriel" && \
    git config --global color.ui true

RUN wget https://github.com/deluan/zsh-in-docker/releases/download/v1.1.1/zsh-in-docker.sh

RUN chmod +x zsh-in-docker.sh

RUN ./zsh-in-docker.sh \
    -t https://github.com/denysdovhan/spaceship-prompt \
    -a 'SPACESHIP_PROMPT_ADD_NEWLINE="false"' \
    -a 'SPACESHIP_PROMPT_SEPARATE_LINE="false"' \
    -p git \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions \
    -p https://github.com/zsh-users/zsh-history-substring-search \
    -p https://github.com/zsh-users/zsh-syntax-highlighting \
    -p 'history-substring-search' \
    -a 'bindkey "\$terminfo[kcuu1]" history-substring-search-up' \
    -a 'bindkey "\$terminfo[kcud1]" history-substring-search-down'

COPY ./.zshrc /root/

RUN apk add --no-cache zsh-vcs

EXPOSE 3000
