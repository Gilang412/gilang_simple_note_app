# application simple note app

create by gilang

1. buat sebuah file env yang berisi seperti contoh dibawah

```
DATABASE_URL="file:./db.sqlite"
PORT=1234
SECRET_KEY="CONTOHSECRETKEY"
```

2. silahkan buka terminal dan jalankan dengan

```
npm install
npx prisma db push
npm run dev
```

3. silahkan test api di file dengan nama **test.rest** pastikan teman-teman sudah menginstall extension Vscode dengan nama **rest client**
