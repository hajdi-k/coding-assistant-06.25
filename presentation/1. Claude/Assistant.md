# Anthropic Claude
 - Agentic Assitant: Claude Code https://www.anthropic.com/claude-code
 - Chat: Claude AI Chat https://claude.ai/new

## Claude Code

Claude Code is an **agentic coding assistant** developed by Anthropic, designed to enhance developer workflows with **context-aware, adaptive interactions**.

<details>
  <summary>More details</summary>
It integrates into coding environments, automatically refining prompts, debugging errors, and assisting with code generation in real time.

Unlike standard AI coding tools, Claude Code operates **dynamically**, adjusting to project-specific needs and offering **scriptable automation**, making it ideal for complex development tasks.

</details>

### Example - Using Claude Code for Debugging

> !!! Claude Max or Pro is required to connect to Claude Code 

1. **Start Claude Code** in your terminal (Jump to the next section for installation instructions for Windows). Frequently used commands:

   ```bash
   wsl.exe -d Ubuntu
   claude --help
   exit
   ```

2. **Ask for help** with a bug:

   ```bash
   claude --debug my_script.py
   ```

3. Claude **analyzes the code**, identifies errors, and suggests fixes.
4. You **apply the suggested changes** and rerun the script.

### Instalation (Windows)

Claude Code primarily runs on Unix-based operating systems, including macOS and Linux distributions like Ubuntu and Debian. However, it can also be used on Windows via WSL (Windows Subsystem for Linux), though it does not run natively on Windows.

Open PowerShell or Comand Prompt

1. Install WSL. If you use docker you may already have a version (use `wsl -l -v` to see installed versions). Anthropic recommends using Ubuntu WSL for better compatibility which is installed with

```bash
wsl --install
```

2. To run it, use:

```bash
wsl.exe -d Ubuntu
```

You can always exit it with `exit`.

3. Check if you have node installed (is WSL was already installed), or install it.

Check:

```bash
node -v
npm -v
```

Install:

```bash
sudo apt update && sudo apt install nodejs npm
```

4. Go to the Ubuntu user's home directory

Depending on where you opened you terminal, you may currently be in a directory like `/mnt/c/Users/<your-Windows-username>`. This is because Windows drives are mounted under `/mnt/c/` so you can access Windows Files from WSL. We need to go to the Ubuntu user's home directory

```bash
cd ~
```

5. Install Claude Code:

```bash
sudo npm install -g @anthropic-ai/claude-code
```

6. Start using claude code:

```bash
claude --help
```

If you have a terminal open in a code editor, just run `wsl` to run WSL and then in the same terminal you can use claude code for the current project.

### Accessing **WSL Ubuntu files** (Windows)

You can access your files in several ways:

1. **From the WSL Terminal**:

   - Your Linux home directory is located at:
     ```
     /home/<your-username>
     ```
   - To list files, use:
     ```
     ls -la
     ```
   - To navigate, use:
     ```
     cd <directory-name>
     ```

2. **From Windows File Explorer**:

   - Open **File Explorer** and type:
     ```
     \\wsl$\Ubuntu
     ```
   - This will show your WSL Ubuntu file system.

3. **Access Windows Files from WSL**:
   - Your Windows drives are mounted under:
     ```
     /mnt/c/
     ```
   - Example: To access your Windows **Documents** folder:
     ```
     cd /mnt/c/Users/<your-Windows-username>/Documents
     ```
