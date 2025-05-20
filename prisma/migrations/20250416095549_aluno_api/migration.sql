-- CreateTable
CREATE TABLE "alunoApi" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "serie" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "alunoApi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alunoApi_email_key" ON "alunoApi"("email");
