"use client";

import { useContext } from "react";
import { LanguageContext } from "./context";

export function useLanguage() {
	return useContext(LanguageContext);
}
