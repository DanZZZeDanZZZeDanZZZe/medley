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

" set colors and theme
set termguicolors
colorscheme onehalflight

" set leader key to <Space>
" let mapleader="\<Space>"

" Spaces & Tabs
set tabstop=2       " number of visual spaces per TAB
set softtabstop=2   " number of spaces in tab when editing
set shiftwidth=2    " number of spaces to use for autoindent
set expandtab       " tabs are space
set autoindent
set copyindent      " copy indent from the previous lines

" ===================================================================================
" ALE
" ===================================================================================

let g:ale_completion_enabled = 1
let g:ale_completion_autoimport = 1
let g:ale_sign_column_always = 1
let g:ale_fix_on_save = 1
let g:ale_sign_error = '✗'
let g:ale_sign_warning = ''

" Use fixers
let js_fixers = ['prettier', 'eslint']

let g:ale_fixers = {
\ '*': ['remove_trailing_lines', 'trim_whitespace'],
\ 'javascript': js_fixers,
\ 'javascript.jsx': js_fixers,
\ 'typescript': js_fixers,
\ 'typescriptreact': js_fixers,
\ 'css': ['prettier'],
\ 'json': ['prettier'],
\ 'markdown': ['prettier'],
\ 'rust': ['rustfmt', 'rls'],
\}

" ===================================================================================
" Plugins
" ===================================================================================

" https://github.com/junegunn/vim-plug
call plug#begin()

" Linting and syntax checking
" htps://github.com/dense-analysis/ale#usage
Plug 'dense-analysis/ale'

" Telescope popup finder
Plug 'nvim-lua/plenary.nvim'
Plug 'nvim-telescope/telescope.nvim'

" Tabs for buffers
" https://github.com/akinsho/bufferline.nvim
Plug 'kyazdani41/nvim-web-devicons' " Recommended (for coloured icons)
Plug 'ryanoasis/vim-devicons' " Icons without colours
" TODO: update nvim
"Plug 'akinsho/bufferline.nvim', { 'tag': 'v2.*' }

" Theme
Plug 'Mofiqul/dracula.nvim'

" Easy motion
Plug 'phaazon/hop.nvim'

" TODO: setup new neovim version
" Better code highlight
" Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'}
call plug#end()

" ===================================================================================
" Hop
" ===================================================================================

"TODO: разобраться и поставить привязки клавиш
lua << EOF
local hop = require('hop')
hop.setup()
EOF

" ===================================================================================
" Telescope
" ===================================================================================

nnoremap <leader>ff <cmd>Telescope find_files<cr>
nnoremap <leader>fg <cmd>Telescope live_grep<cr>
nnoremap <leader>fb <cmd>Telescope buffers<cr>
nnoremap <leader>fh <cmd>Telescope help_tags<cr>

" close popup by the q key
lua << EOF
local actions = require('telescope.actions')

require('telescope').setup{
  defaults = {
    mappings = {
      n = {
        ["q"] = actions.close
      },
    },
  },
}
EOF

" ===================================================================================
" Key bindings
" ===================================================================================

" Exit & Save
nnoremap <leader>q :q<CR>
nnoremap <leader>w :w<CR>

" Open netrw (file explorer)
nnoremap <leader>e :Explore<CR>

inoremap <C-Space> <C-X><C-O>

" reload vim config
" https://dev.to/reobin/reload-init-vim-without-restarting-neovim-1h82#:~:text=After%20editing%20your%20init.,instead%20of%20quitting%20and%20restarting.
nnoremap <silent> <leader>v :e $MYVIMRC<cr>

" TODO: разобраться с расширением для табов
