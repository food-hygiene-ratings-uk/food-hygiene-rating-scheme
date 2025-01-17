import { getClassSuffix } from "../../lib/template/template.ts";

export const forgeFooter = () => {
  const classSuffix = getClassSuffix();

  const css = `
        .component-footer-${classSuffix} {
            display: contents;

            footer {
                background-color: var(--primary-blue);
                color: var(--light-blue);
                padding-top: 2rem;
                padding-bottom: 2rem;
                text-align: center;
                margin-top: 2rem;

                overflow: hidden;

                a {
                    color: white;
                    text-decoration: none;
                    border-bottom: 1px solid rgba(255,255,255,0.3);
                    transition: border-color 0.3s;

                    &:hover {
                        border-color: white;
                    }
                }
            }
        }`;

  const html = `
        <div class="component-footer-${classSuffix}">
            <footer>
                <div class="container">
                    <p>Food Hygiene Ratings UK - Open Source Project</p>
                    <p>Data provided by local authorities across the UK</p>
                    <a href="https://github.com/food-hygiene-ratings-uk/food-hygiene-rating-scheme">GitHub Repository</a>
                </div>
            </footer>
        </div>`;

  return {
    css,
    html,
  };
};
