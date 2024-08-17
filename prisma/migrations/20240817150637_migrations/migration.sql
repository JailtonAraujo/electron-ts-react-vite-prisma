-- CreateTable
CREATE TABLE "customer" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_username_key" ON "customer"("username");
