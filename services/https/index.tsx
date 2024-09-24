// Import interfaces
import { MemberInterface } from "../../interfaces/IMember";
import { PackageInterface } from "../../interfaces/IPackage";
import { PaymentInterface } from "../../interfaces/IPayment";
import { CreditCardInterface } from "../../interfaces/ICreditCard";
import { PaypalInterface } from "../../interfaces/IPaypal";
import { PromptpayInterface } from "../../interfaces/IPromptpay";
import { SubscriptionInterface } from "../../interfaces/ISubscription";

const apiUrl = "http://localhost:3036";

// =================== Member Service ===================

async function GetMemberByID(id: number): Promise<MemberInterface | false> {
  const response = await fetch(`${apiUrl}/members/${id}`);
  return response.status === 200 ? response.json() : false;
}

async function ListAllMembers(): Promise<MemberInterface[] | false> {
  const response = await fetch(`${apiUrl}/members`);
  return response.status === 200 ? response.json() : false;
}

async function CreateMember(data: MemberInterface): Promise<MemberInterface | false> {
  const response = await fetch(`${apiUrl}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 201 ? response.json() : false;
}

async function UpdateMember(id: number, data: MemberInterface): Promise<MemberInterface | false> {
  const response = await fetch(`${apiUrl}/members/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 200 ? response.json() : false;
}

async function DeleteMemberByID(id: number): Promise<boolean> {
  const response = await fetch(`${apiUrl}/members/${id}`, { method: "DELETE" });
  return response.status === 200;
}

// =================== Package Service ===================

async function GetPackageByID(id: number): Promise<PackageInterface | false> {
  const response = await fetch(`${apiUrl}/packages/${id}`);
  return response.status === 200 ? response.json() : false;
}

async function ListAllPackages(): Promise<PackageInterface[] | false> {
  const response = await fetch(`${apiUrl}/packages`);
  return response.status === 200 ? response.json() : false;
}

async function CreatePackage(data: PackageInterface): Promise<PackageInterface | false> {
  const response = await fetch(`${apiUrl}/packages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 201 ? response.json() : false;
}

async function UpdatePackage(id: number, data: PackageInterface): Promise<PackageInterface | false> {
  const response = await fetch(`${apiUrl}/packages/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 200 ? response.json() : false;
}

async function DeletePackageByID(id: number): Promise<boolean> {
  const response = await fetch(`${apiUrl}/packages/${id}`, { method: "DELETE" });
  return response.status === 200;
}

// =================== Payment Service ===================

async function GetPaymentByID(id: number): Promise<PaymentInterface | false> {
  const response = await fetch(`${apiUrl}/payment_methods/${id}`);
  return response.status === 200 ? response.json() : false;
}

async function ListAllPayment(): Promise<PaymentInterface[] | false> {
  const response = await fetch(`${apiUrl}/payment_methods`);
  return response.status === 200 ? response.json() : false;
}

async function CreatePayment(data: PaymentInterface): Promise<PaymentInterface | false> {
  const response = await fetch(`${apiUrl}/payment_methods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 201 ? response.json() : false;
}

async function UpdatePayment(id: number, data: PaymentInterface): Promise<PaymentInterface | false> {
  const response = await fetch(`${apiUrl}/payment_methods/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 200 ? response.json() : false;
}

async function DeletePaymentByID(id: number): Promise<boolean> {
  const response = await fetch(`${apiUrl}/payment_methods/${id}`, { method: "DELETE" });
  return response.status === 200;
}



// =================== CreditCard Service ===================

async function GetCreditCardByID(id: number): Promise<CreditCardInterface | false> {
  const response = await fetch(`${apiUrl}/creditcards/${id}`);
  return response.status === 200 ? response.json() : false;
}

async function ListAllCreditCards(): Promise<CreditCardInterface[] | false> {
  const response = await fetch(`${apiUrl}/creditcards`);
  return response.status === 200 ? response.json() : false;
}

async function CreateCreditCard(data: CreditCardInterface): Promise<CreditCardInterface | false> {
  const response = await fetch(`${apiUrl}/creditcards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 201 ? response.json() : false;
}

async function UpdateCreditCard(id: number, data: CreditCardInterface): Promise<CreditCardInterface | false> {
  const response = await fetch(`${apiUrl}/creditcards/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 200 ? response.json() : false;
}

async function DeleteCreditCardByID(id: number): Promise<boolean> {
  const response = await fetch(`${apiUrl}/creditcards/${id}`, { method: "DELETE" });
  return response.status === 200;
}

// =================== Paypal Service ===================

async function GetPaypalByID(id: number): Promise<PaypalInterface | false> {
  const response = await fetch(`${apiUrl}/paypals/${id}`);
  return response.status === 200 ? response.json() : false;
}

async function ListAllPaypals(): Promise<PaypalInterface[] | false> {
  const response = await fetch(`${apiUrl}/paypals`);
  return response.status === 200 ? response.json() : false;
}

async function CreatePaypal(data: PaypalInterface): Promise<PaypalInterface | false> {
  const response = await fetch(`${apiUrl}/paypals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 201 ? response.json() : false;
}

async function UpdatePaypal(id: number, data: PaypalInterface): Promise<PaypalInterface | false> {
  const response = await fetch(`${apiUrl}/paypals/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 200 ? response.json() : false;
}

async function DeletePaypalByID(id: number): Promise<boolean> {
  const response = await fetch(`${apiUrl}/paypals/${id}`, { method: "DELETE" });
  return response.status === 200;
}

// =================== PromptPay Service ===================

async function GetPromptPayByID(id: number): Promise<PromptpayInterface | false> {
  const response = await fetch(`${apiUrl}/promptpays/${id}`);
  return response.status === 200 ? response.json() : false;
}

async function ListAllPromptPays(): Promise<PromptpayInterface[] | false> {
  const response = await fetch(`${apiUrl}/promptpays`);
  return response.status === 200 ? response.json() : false;
}

async function CreatePromptPay(data: PromptpayInterface): Promise<PromptpayInterface | false> {
  const response = await fetch(`${apiUrl}/promptpays`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 201 ? response.json() : false;
}

async function UpdatePromptPay(id: number, data: PromptpayInterface): Promise<PromptpayInterface | false> {
  const response = await fetch(`${apiUrl}/promptpays/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 200 ? response.json() : false;
}

async function DeletePromptPayByID(id: number): Promise<boolean> {
  const response = await fetch(`${apiUrl}/promptpays/${id}`, { method: "DELETE" });
  return response.status === 200;
}

// =================== Subscription Service ===================

async function GetSubscriptionByID(id: number): Promise<SubscriptionInterface | false> {
  const response = await fetch(`${apiUrl}/subscriptions/${id}`);
  return response.status === 200 ? response.json() : false;
}

async function ListAllSubscriptions(): Promise<SubscriptionInterface[] | false> {
  const response = await fetch(`${apiUrl}/subscriptions`);
  return response.status === 200 ? response.json() : false;
}

async function CreateSubscription(data: SubscriptionInterface): Promise<SubscriptionInterface | false> {
  const response = await fetch(`${apiUrl}/subscriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 201 ? response.json() : false;
}

async function UpdateSubscription(id: number, data: SubscriptionInterface): Promise<SubscriptionInterface | false> {
  const response = await fetch(`${apiUrl}/subscriptions/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.status === 200 ? response.json() : false;
}

async function DeleteSubscriptionByID(id: number): Promise<boolean> {
  const response = await fetch(`${apiUrl}/subscriptions/${id}`, { method: "DELETE" });
  return response.status === 200;
}

export {
  // Member Service
  GetMemberByID,
  ListAllMembers,
  CreateMember,
  UpdateMember,
  DeleteMemberByID,

  // Package Service
  GetPackageByID,
  ListAllPackages,
  CreatePackage,
  UpdatePackage,
  DeletePackageByID,

  // Payment Service
  GetPaymentByID,
  ListAllPayment,
  CreatePayment,
  UpdatePayment,
  DeletePaymentByID,

  // CreditCard Service
  GetCreditCardByID,
  ListAllCreditCards,
  CreateCreditCard,
  UpdateCreditCard,
  DeleteCreditCardByID,

  // Paypal Service
  GetPaypalByID,
  ListAllPaypals,
  CreatePaypal,
  UpdatePaypal,
  DeletePaypalByID,

  // PromptPay Service
  GetPromptPayByID,
  ListAllPromptPays,
  CreatePromptPay,
  UpdatePromptPay,
  DeletePromptPayByID,

  // Subscription Service
  GetSubscriptionByID,
  ListAllSubscriptions,
  CreateSubscription,
  UpdateSubscription,
  DeleteSubscriptionByID,
};
