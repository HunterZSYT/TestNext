// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLxYZbpTqDsqB1kPae7D9i
// Component: FJ-Gi17IRjmG

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsdbMap73KvQw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: dbMap73Kv-Qw/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: wLxYZbpTqDsqB1kPae7D9i/projectcss
import sty from "./PlasmicContactSection.module.css"; // plasmic-import: FJ-Gi17IRjmG/css

import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: mlY3PnwHKZEC/icon

createPlasmicElementProxy;

export type PlasmicContactSection__VariantMembers = {};
export type PlasmicContactSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactSection__VariantsArgs;
export const PlasmicContactSection__VariantProps = new Array<VariantPropType>();

export type PlasmicContactSection__ArgsType = {};
type ArgPropType = keyof PlasmicContactSection__ArgsType;
export const PlasmicContactSection__ArgProps = new Array<ArgPropType>();

export type PlasmicContactSection__OverridesType = {
  contact?: Flex__<"section">;
  h2?: Flex__<"h2">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  svg?: Flex__<"svg">;
};

export interface DefaultContactSectionProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContactSection__RenderFunc(props: {
  variants: PlasmicContactSection__VariantsArgs;
  args: PlasmicContactSection__ArgsType;
  overrides: PlasmicContactSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsdbMap73KvQw()
  });

  return (
    <Stack__
      as={"section"}
      data-plasmic-name={"contact"}
      data-plasmic-override={overrides.contact}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.contact
      )}
      id={"contact"}
    >
      <div className={classNames(projectcss.all, sty.freeBox__divVs)}>
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.h2
          )}
          id={"contact"}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Ready to get your business out \nthere?"
            : "Ready to work together?"}
        </h2>
        <div className={classNames(projectcss.all, sty.freeBox__rV6Ky)}>
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link
            )}
            component={Link}
            href={"https://www.plasmic.app/"}
            platform={"nextjs"}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "let\u2019s make something special"
              : "I'd love to hear from you"}
          </PlasmicLink__>
          <RightArrowIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  contact: ["contact", "h2", "link", "svg"],
  h2: ["h2"],
  link: ["link"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  contact: "section";
  h2: "h2";
  link: "a";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactSection__VariantsArgs;
    args?: PlasmicContactSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContactSection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContactSection__ArgProps,
          internalVariantPropNames: PlasmicContactSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "contact") {
    func.displayName = "PlasmicContactSection";
  } else {
    func.displayName = `PlasmicContactSection.${nodeName}`;
  }
  return func;
}

export const PlasmicContactSection = Object.assign(
  // Top-level PlasmicContactSection renders the root element
  makeNodeComponent("contact"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicContactSection
    internalVariantProps: PlasmicContactSection__VariantProps,
    internalArgProps: PlasmicContactSection__ArgProps
  }
);

export default PlasmicContactSection;
/* prettier-ignore-end */
