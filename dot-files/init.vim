" ===================================================================================
" NEOVIM CONFIG
" ~/.config/nvim/init.vim
" ===================================================================================

" use mouse
set mouse=a

" show line numbers
set number

" use system register for copy and past
set clipboard=unnamedplus

" set leader key to <Space>
let mapleader="\<Space>"

" Spaces & Tabs
set tabstop=2       " number of visual spaces per TAB
set softtabstop=2   " number of spaces in tab when editing
set shiftwidth=2    " number of spaces to use for autoindent
set expandtab       " tabs are space
set autoindent
set copyindent      " copy indent from the previous lines


" ===================================================================================
" Key bindings
" ===================================================================================

" Exit & Save
nnoremap <leader>q :q<CR>
nnoremap <leader>w :w<CR>
